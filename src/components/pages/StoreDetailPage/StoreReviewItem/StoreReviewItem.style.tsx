import styled from "styled-components";

import Image from "components/common/Image/Image";

export const StoreReviewContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: fit-content;
  padding: 1rem 1.25rem;

  box-shadow: 0 0 0.15rem ${({ theme }) => theme.black};
  border: none;
  border-radius: 0.25rem;
`;

export const UserProfileImage = styled(Image)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 0 0.2rem ${({ theme }) => theme.primary};
`;

export const ReviewContentWrapper = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.25rem;
`;

export const Header = styled.header`
  width: 100%;
  padding-bottom: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 0.065rem solid ${({ theme }) => theme.secondary};
`;

export const ReviewBottom = styled.div`
  min-height: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuWrapper = styled.div`
  color: ${({ theme }) => theme.secondary};
  align-self: flex-end;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  word-break: break-all;
`;

export const RatingPlaceholder = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
`;
