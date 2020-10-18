import Layout from "layouts/main-layout";
import SectionLatestNews from "components/section-latest-new";
import SectionNew from "components/section-new";
import Button from "components/button";
import { useRouter } from "next/router";
import { DEFAULT_CATEGORY_ID } from "../constants";

export default function Home({ finalData }) {
  const router = useRouter();
  const handleLoadMore = key => () => {
    router.push(`/${key}`);
    window.scrollTo(0, 0);
  };
  return (
    <Layout>
      <SectionLatestNews />
      {finalData.map(({ posts, tagCategory, categoryKey }) => (
        <>
          <SectionNew posts={posts} tagCategory={tagCategory} />
          <div className="text-center">
            <Button onClick={handleLoadMore(categoryKey)} className="mb-4">
              Xem thêm
            </Button>
          </div>
        </>
      ))}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const promise = Object.keys(DEFAULT_CATEGORY_ID).map(key => {
    const categoryId = DEFAULT_CATEGORY_ID[key].id;
    const fetchURL = `${process.env.API_VNEXPRESS}?category_id=${categoryId}&limit=8&page=1`;
    return fetch(fetchURL).then(res => res.json());
  });

  const res = await Promise.all(promise);

  const finalData = Object.keys(DEFAULT_CATEGORY_ID).map((key, index) => {
    let posts = [];
    const categoryId = DEFAULT_CATEGORY_ID[key].id;
    const tagCategory = DEFAULT_CATEGORY_ID[key].tag;
    if (res[index].code === 200) {
      posts = res[index].data[categoryId].data;
    }
    return {
      posts,
      tagCategory,
      categoryKey: key
    };
  });

  return {
    props: {
      finalData
    } // will be passed to the page component as props
  };
}
