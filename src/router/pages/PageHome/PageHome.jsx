import React from "react";
import PageBaseTemplate from "../../../pageTemplates/PageBaseTemplate/index.js";
import Hero from "../../../components/main/Hero";

const PageHome = () => {
    return (
        <PageBaseTemplate>
            <main>
                <Hero/>
            </main>
        </PageBaseTemplate>

    )
}

export default PageHome;