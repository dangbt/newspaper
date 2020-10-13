import Layout from "layouts/main-layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-3/4 mr-0 md:mr-8">
        <div>
          <h1 className="font-bold text-yellow-500 text-24">Giá vàng</h1>
        </div>
        <div>
          <h1 className="font-bold text-yellow-500 text-24">
            Biểu đồ giá vàng 30 ngày gần nhất
          </h1>
        </div>
      </div>
    </Layout>
  );
}
