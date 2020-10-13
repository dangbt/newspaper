import Layout from "layouts/main-layout";
import SectionLatestNews from "components/section-latest-new";
import SectionNew from "components/section-new";
import Button from "components/button";

export default function Home() {
  return (
    <Layout>
      <SectionLatestNews />
      <SectionNew />
      <div className="text-center">
        <Button className="mb-4">Load more</Button>
      </div>
    </Layout>
  );
}
