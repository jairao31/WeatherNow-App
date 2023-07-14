import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const overrides = {
    styles: {
        global: () => ({
            ".chakra-form__required-indicator": {
                color: "#e22d2d!important",
            },
            ".chakra-form__helper-text": {
                color: "#67788f!important",
            },
        }),
    },

    fonts: {
        heading: "Trebuchet MS, sans-serif",
        body: "Trebuchet MS, sans-serif",
    },
    colors: {
        brand: {
            50: "FFFFFF", //white
            100: "#f5e9ea", //light red
            300: "#A10016", //bright red
            500: "#8D2434", //maroon red
            700: "#3E4040", //gray
            900: "#000000", //black
        },
    },
    components: {
        Select: {
            parts: [],
            // The base styles for each part
            baseStyle: {},
            // The size styles for each part
            sizes: {},
            // The variant styles for each part
            variants: {},
            // The default `size` or `variant` values
            defaultProps: {
                size: "md",
                focusBorderColor: "brand.900",
            },
        },
        Input: {
            baseStyle: {
                color: "brand.900",
            },
            asterisk: {
                color: "black",
            },
        },
        Button: {
            baseStyle: {
                fontWeight: "500",
                backgroundColor: "brand.500",
            },
            variants: {
                ghost: {
                    _hover: {
                        color: "white!important",
                        backgroundColor: "brand.300",
                    },
                },
                outline: {
                    borderColor: "brand.500",
                    _hover: {
                        color: "white!important",
                        backgroundColor: "brand.300",
                    },
                },
                solid: {
                    backgroundColor: "brand.700",
                    _hover: {
                        backgroundColor: "brand.300",
                    },
                },
            },
        },
        IconButton: {
            defaultProps: {
                textColor: "brand.700",
            },
            variants: {
                ghost: {
                    _hover: {
                        color: "white!important",
                        backgroundColor: "brand.300",
                    },
                },
            },
        },
    },
};

export default extendTheme(
    overrides,
    withDefaultColorScheme({ colorScheme: "brand" })
);
