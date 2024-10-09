import React from "react";
import PageBaseTemplate from "../../../pageTemplates/PageBaseTemplate/index.js";
import Hero from "../../../components/main/Hero";
import LatestPosts from "../../../components/main/LatestPosts/index.js";
import OurValues from "../../../components/main/OurValues/index.js";

const PageHome = () => {
    return (
        <PageBaseTemplate>
            <main>
                <Hero/>
                <LatestPosts/>
                <OurValues/>
            </main>
        </PageBaseTemplate>

    )
}

export default PageHome;