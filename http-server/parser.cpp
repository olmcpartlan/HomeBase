#include <map>
#include <vector>
#include <string>
#include <iostream>
#include <sstream>
#include <boost/filesystem.hpp>
#include <boost/property_tree/ptree.hpp>
#include <boost/property_tree/json_parser.hpp>

namespace pt = boost::property_tree;
std::string create_json(std::string &path)
{
    // Create an empty property tree object.
    pt::ptree tree;

    pt::ptree all_elements;

    // boost::filesystem::directory_entry in boost::filesystem::directory_iterator(path)
    for (boost::filesystem::directory_entry &entry : boost::make_iterator_range(boost::filesystem::directory_iterator(path), {}))
    {
        pt::ptree element;

        // Check if element is a directory, can't read the size, ext, ...
        bool is_directory = boost::filesystem::is_directory(entry.path().string());
        bool is_hidden = boost::filesystem::is_other(entry.path());

        if(is_hidden) continue;

        // Create the JSON structure.
        element.put("full-path", entry.path().string());
        element.put("file-name", entry.path().filename().string());
        element.put("file-type", is_directory ? "directory" : "file");
        element.put("file-size", !is_directory ? boost::filesystem::file_size(entry.path().string()) : 0 );


        std::string file_name = entry.path().stem().string();

        // Add each element to the parent list of elements
        all_elements.push_back(std::make_pair(file_name, element));

    }

    tree.put("directory-path", path.erase(0, 2));
    tree.push_back(std::make_pair("elements", all_elements));


    // Put a vector of numbers into the tree
    /*
    pt::ptree child2;
    std::vector<int> vector = {1, 2, 3, 4};
    for (auto &v : vector)
    {
        pt::ptree item;
        item.put("", v);
        child2.push_back(std::make_pair("", item));
    }
    tree.add_child("vector", child2);
    */

    std::stringstream ss;
    pt::json_parser::write_json(ss, tree);


    return ss.str();
}
