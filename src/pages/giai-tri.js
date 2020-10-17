import Layout from "layouts/main-layout";
import SideBar from "components/sidebar-giai-tri";
import Content from "components/content-giai-tri";

export default function GiaiTri({ data }) {
  return (
    <Layout>
      <div className="relative flex my-8">
        <div style={{ maxWidth: 200 }} className="w-1/3 mr-8">
          <div style={{ top: 120, maxWidth: 200 }} className="fixed w-full">
            <SideBar />
          </div>
        </div>
        <div className="p-8 bg-gray-300 border ">
          <Content data={data} />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { group = "default", type = "hot" } = context.query;
  const fetchURL = `${process.env.API_9GAG}/group/${group}/type/${type}`;
  const res = await fetch(fetchURL).then(res => res.json());

  return {
    props: {
      data: res
    } // will be passed to the page component as props
  };
}
