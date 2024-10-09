import React from "react";

const PageBaseTemplate = (children) => {
    return (
        <React.Fragment>
            <header>

            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </React.Fragment>
    )
}

export default PageBaseTemplate;