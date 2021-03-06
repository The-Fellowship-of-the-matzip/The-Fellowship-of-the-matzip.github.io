import { useNavigate } from "react-router-dom";

import { PATHNAME } from "constants/routes";

import * as S from "components/pages/CategoryPage/Category/Category.style";
import CategoryItem from "components/pages/CategoryPage/CategoryItem/CategoryItem";

interface CategoryProps {
  categories: {
    id: number;
    name: string;
  }[];
}

function Category({ categories }: CategoryProps) {
  const navigate = useNavigate();

  const handleClickCategoryItem = (id: number) => () => {
    navigate(`${PATHNAME.CATEGORY_DETAIL}/${id}`);
  };

  return (
    <S.CategoryContainer>
      {categories.map(({ id, name }) => (
        <CategoryItem
          key={id}
          buttonText={name[0]}
          onClick={handleClickCategoryItem(id)}
        >
          {name}
        </CategoryItem>
      ))}
    </S.CategoryContainer>
  );
}

export default Category;
