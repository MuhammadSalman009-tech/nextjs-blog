import Link from "next/link";
import styles from "../styles/about.module.css";
function about() {
  return (
    <div className={`container ${styles.about}`}>
      <h1>About ITfiriens</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ab
        ullam possimus voluptatum dolore eos reprehenderit consequuntur
        repellendus eveniet praesentium. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Natus, saepe. Debitis repellendus qui omnis, placeat
        ratione accusantium tempore eaque quasi perferendis distinctio
        temporibus similique enim velit ipsum aliquid. Nihil, voluptatum. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Hic assumenda est
        voluptatibus minima, repellendus error iusto voluptatum doloribus
        suscipit reprehenderit officiis optio iste omnis quam nostrum veritatis
        consectetur, unde eaque?
      </p>
      <Link href="/">
        <a className="btn btn-primary">Back to Home</a>
      </Link>
    </div>
  );
}

export default about;
