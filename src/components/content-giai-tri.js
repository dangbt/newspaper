import React from "react";
import ContentGiaiTriItem from "components/content-giai-tri-item";
import _get from "lodash.get";

export default function ContentGiaiTri({ data }) {
  return (
    <>
      <div>
        {_get(data, "data.posts", []).map(item => {
          return <ContentGiaiTriItem {...item} />;
        })}
      </div>
    </>
  );
}
