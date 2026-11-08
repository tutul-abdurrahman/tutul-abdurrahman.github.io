import Reveal from "./Reveal";
import { ownProducts } from "../data/work";

export default function ProductCards() {
  return (
    <>
      {ownProducts.map((product, index) => (
        <Reveal
          as="article"
          className={`product glass${index === 1 ? " product--split" : ""}`}
          key={product.name}
        >
          <div className="product-media">
            <div className="product-hero">
              <img
                src={product.images.hero}
                alt={`${product.name} preview`}
                loading="lazy"
              />
            </div>
            {product.images.thumbs.length ? (
              <div className="product-thumbs">
                {product.images.thumbs.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${product.name} screen`}
                    loading="lazy"
                  />
                ))}
              </div>
            ) : null}
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
          </div>
        </Reveal>
      ))}
    </>
  );
}
