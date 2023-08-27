const { useMediaQuery } = require("react-responsive");

//brackpoints
export const isMobile = useMediaQuery({ minWidth: 220, maxWidth: 767})
export const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1200 })
export const isDesctop = useMediaQuery({ minWidth: 1200 })
