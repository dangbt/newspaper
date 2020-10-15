import { useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "layouts/main-layout";
import SectionNew from "components/section-new";
import Button from "components/button";
import { DEFAULT_CATEGORY_ID } from "../../constants";

export default function Category({ posts, tagCategory }) {
  const router = useRouter();
  const { category, page } = router.query;

  const handleLoadMore = value => () => {
    const newPage = Number(page || 1) + value;
    router.push(
      {
        pathname: "/[category]",
        query: { page: newPage }
      },
      {
        pathname: category,
        query: { page: newPage }
      }
    );
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <SectionNew posts={posts} tagCategory={tagCategory} />
      <div className="text-center">
        <Button
          disabled={Number(page) < 2}
          onClick={handleLoadMore(-1)}
          className="mb-4 mr-2"
        >
          Quay lại
        </Button>
        <Button
          onClick={handleLoadMore(1)}
          className="mb-4 text-white bg-blue-500 hover:bg-white hover:text-catalina-blue"
        >
          Xem tiếp
        </Button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { category },
    query: { page = 1 }
  } = context;
  const categoryId = DEFAULT_CATEGORY_ID[category].id;
  const tagCategory = DEFAULT_CATEGORY_ID[category].tag;
  const fetchURL = `${process.env.API_VNEXPRESS}?category_id=${categoryId}&limit=20&page=${page}`;
  const res = await fetch(fetchURL);
  const data = await res.json();
  let posts = [];
  if (data.code === 200) {
    posts = data.data[categoryId].data;
  }
  return {
    props: {
      posts,
      tagCategory
    } // will be passed to the page component as props
  };
}
