#include <iostream>
#include <boost/multiprecision/cpp_dec_float.hpp>
#include <boost/math/constants/constants.hpp>

int main() {
    using namespace boost::multiprecision;
    cpp_dec_float_50 num = boost::math::constants::pi<cpp_dec_float_50>();
    std::cout << num << std::endl;
    
    return 0;
}