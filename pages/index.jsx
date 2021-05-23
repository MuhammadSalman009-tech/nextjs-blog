import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.css";
export default function Home({ data }) {
  return (
    <div className={`container ${styles.home}`}>
      <h1>Home</h1>
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
      <Link href="/itfieriens">
        <a className="btn btn-primary">Go to ITfieriens</a>
      </Link>
    </div>
  );
}
