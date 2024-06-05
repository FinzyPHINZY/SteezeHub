import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description__box">
      <div className="description__box_navigator">
        <div className="description__box_nav">Description</div>
        <div className="description__box_nav fade">Reviews (122)</div>
      </div>
      <div className="description__box_description">
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling of products or services over the internet. It serves as a
          virtual marketplace where businesses and individuals showcase their
          products, interact with customers, and conduct transactions without
          the need for a physical presence. E-commerce websites have gained
          immense popularity due to their convenient accessibility, and the
          global reach they offer.
        </p>
        <p>
          E-commerce webistes typically display products or services and
          detailed descriptions, images, prices, and any available variants
          (e,b, sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
