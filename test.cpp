#include<iostream>
#include<vector>


// To reference the anon function, need to pass by function pointer.
void looper(const std::vector<int>& values, void(*qanon)(int)) 
{
	for(int value : values)
	{
		qanon(value);

	}
}

int main()
{
	std::vector<int> values = { 1, 2, 3, 4, 5};

	// Declare as variable but don't assign the parameters until 
 	// the function is actually being referenced.
	auto const qanon = 
	[](int value) 
	{ 
		std::cout << "Value: " << value << std::endl; 
	};

	looper(values, qanon);
}

