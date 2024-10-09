import React from "react";
import PageBaseTemplate from "../../../pageTemplates/PageBaseTemplate/index.js";
import Hero from "../../../components/main/Hero";
import LatestPosts from "../../../components/main/LatestPosts/index.js";
import OurValues from "../../../components/main/OurValues/index.js";
import BlogsCollection from "../../../components/main/BlogsCollection/index.js";

const PageHome = () => {
    return (
        <PageBaseTemplate>
            <main>
                <Hero/>
                <LatestPosts/>
                <OurValues/>
                <BlogsCollection/>
            </main>
        </PageBaseTemplate>

    )
}

export default PageHome;