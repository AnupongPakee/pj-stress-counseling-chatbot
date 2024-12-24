const style = {
    "container": {
        position: "relative",
        width: "100vw",
        height: "100vh",
        padding: "1.6rem",
        overflow: "hidden",
        backgroundColor: "rgba(224, 234, 252, 1)"
    },
    "font_family":
    {
        "en": {
            fontFamily: "Roboto, sans-serif",
            fontWeight: "300",
            letterSpacing: "1px"
        },
        "th": {
            fontFamily: "IBM Plex Sans Thai, sans-serif",
            fontWeight: "300",
            letterSpacing: "1px"
        }
    },
    "content-bg": {
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        width: "100%",
        height: "100%",
        zIndex: "0"
    },
    "bg-1": {
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#6F3089",
        boxShadow: "6px 0 16px rgba(0, 0, 0, 0.5)",
        zIndex: "2",
    },
    "bg-2": {
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#6F3089",
        boxShadow: "6px 0 16px rgba(0, 0, 0, 0.5)",
        zIndex: "1",
    },
    "bg-3": {
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#6F3089",
        boxShadow: "6px 0 16px rgba(0, 0, 0, 0.5)",
        zIndex: "0",
    }
}

export default style;