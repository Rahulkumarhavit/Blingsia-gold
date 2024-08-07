import {CardWallet, Hero,ProductCard,GiftCard} from "../components/index"

export default function Home() {
  return (
    <>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
      <CardWallet/>
      </section>
      <section className="padding-x py-10">
        <ProductCard/>
      </section>
      <section>
        <GiftCard/>
      </section>
      
    </ >
  );
}
