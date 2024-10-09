import React from "react";
import PageBaseTemplate from "../../../pageTemplates/PageBaseTemplate/index.js";
import Hero from "../../../components/main/Hero";
import LatestPosts from "../../../components/main/LatestPosts/index.js";

const PageHome = () => {
    return (
        <PageBaseTemplate>
            <main>
                <Hero/>
                <LatestPosts/>
            </main>
        </PageBaseTemplate>

    )
}

export default PageHome;