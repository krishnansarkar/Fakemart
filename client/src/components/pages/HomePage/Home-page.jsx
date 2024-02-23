import FeaturedProducts from "./FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Korean traditions brought to Princeton's doorstep</h1>
        <p>
          Welcome to Woori Mart Princeton, where you can indulge your senses
          with authentic Korean cuisine. Our goal is to provide a welcoming
          shopping and dining experience for our customers. The market is
          stocked daily with fresh produce, meat, fish and more. Our restaurant
          also offers a wide range of traditional Korean dishes, sushi, and
          other specialties.
        </p>
        <p>64 Princeton Hightstown Rd West Windsor, NJ 08550</p>
      </div>
      <div>
        <p>Korean food discount up to 50%. Available from 6pm to close.</p>
      </div>
      <div>
        <FeaturedProducts />
      </div>
    </>
  );
}
