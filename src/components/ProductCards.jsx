import Arrow from "./Arrow";
import ProductCarousel from "./ProductCarousel";
import Reveal from "./Reveal";
import { ownProducts } from "../data/work";

export default function ProductCards() {
  return (
    <>
      {ownProducts.map((product, index) => (
        <Reveal
          as="article"
          className={`product glass${index % 2 === 1 ? " product--alt" : ""}`}
          key={product.name}
        >
          <div className="product-media">
            <ProductCarousel
              name={product.name}
              alt={product.images.alt}
              slides={product.images.slides}
            />
          </div>

          <div className="product-body">
            <div className="product-top">
              {product.tags.map((tag, tagIndex) => (
                <span
                  className={`chip${tagIndex === 0 ? " chip-live" : ""}`}
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3>{product.name}</h3>
            <p className="product-lede">{product.lede}</p>
            <p>{product.body}</p>
            <ul className="product-facts">
              {product.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            {product.href ? (
              <span className="arrow-link product-cta">
                See both kits
                <Arrow />
              </span>
            ) : null}
          </div>

          {product.href ? (
            <a
              className="product-hit"
              href={product.href}
              aria-label={`${product.name}: see both kits`}
            />
          ) : null}
        </Reveal>
      ))}
    </>
  );
}
