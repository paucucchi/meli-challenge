import '../../assets/styles/Breadcrumb.scss';

function Breadcrumb(props) {;
  const categories = props.categories;

  const categoriesList = categories && categories.map((category, index) => {
    if (categories.length === index + 1) {
      return <span key={"category-" + index} className="selected">{category}</span>;
    }
    return (
      <span key={"category-" + index}>
        {category}<span className="arrow">{'>'}</span>
      </span>
    );
  });

  return (
    <section className="breadcrumb">
      {categoriesList}
    </section>
  );
}

export default Breadcrumb;
