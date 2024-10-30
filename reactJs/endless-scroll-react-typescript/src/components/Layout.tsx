import  Content  from "./Content";
import style from "../styles/components/Layout.module.scss";

function Layout() {
  return (
    <div className={style.grid}>
      <Content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          facere inventore, tenetur itaque enim impedit nobis aliquam?
          Reiciendis dolorum error fuga sequi, magnam nulla perspiciatis quam
          earum sapiente itaque totam!
        </p>
      </Content>
    </div>
  );
}

export default Layout;
