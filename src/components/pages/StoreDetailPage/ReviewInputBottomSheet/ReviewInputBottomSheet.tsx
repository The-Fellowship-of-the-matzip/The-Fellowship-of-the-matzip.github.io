import { AxiosError } from "axios";
import { useState } from "react";
import { useMutation } from "react-query";

import { NETWORK } from "constants/api";
import MESSAGES from "constants/messages";
import { INPUT_MAX_LENGTH } from "constants/rules";

import useLogin from "hooks/useLogin";

import sendReviewPostRequest from "api/sendReviewPostRequest";

import BottomSheet from "components/common/BottomSheet/BottomSheet";
import StarRating from "components/common/StarRating/StarRating";

import * as S from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet.style";

type Props = {
  closeSheet: () => void;
  restaurantId: string;
  onSuccess: () => void;
};

type ReviewInputShape = {
  content: string;
  rating: number;
  menu: string;
};

const DEFAULT_RATING = 4;

function ReviewInputBottomSheet({
  closeSheet,
  restaurantId,
  onSuccess,
}: Props) {
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [reviewContent, setReviewContent] = useState("");
  const [menuInput, setMenuInput] = useState("");

  const { logout } = useLogin();

  const handleSubmitRequest: React.FormEventHandler = (e) => {
    e.preventDefault();
    mutation.mutate({
      content: reviewContent,
      rating: rating + 1,
      menu: menuInput,
    });
    closeSheet();
  };

  const handleMenuInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { value },
    } = e;

    if (value.length > INPUT_MAX_LENGTH.MENU) {
      e.preventDefault();
      alert(MESSAGES.EXCEED_MENU_MAX_LENGTH);
      return;
    }

    setMenuInput(value);
  };

  const handleContentInput: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const {
      target: { value },
    } = e;

    if (value.length > INPUT_MAX_LENGTH.REVIEW_CONTENT) {
      e.preventDefault();
      alert(MESSAGES.EXCEED_REVIEW_CONTENT_MAX_LENGTH);
      return;
    }

    setReviewContent(value);
  };

  const handleSubmitError = (error: AxiosError) => {
    if (error.code === "401") {
      alert(MESSAGES.TOKEN_EXPIRED);
      logout();
    }
  };

  const mutation = useMutation<unknown, AxiosError, ReviewInputShape>(
    sendReviewPostRequest(restaurantId),
    { onSuccess, onError: handleSubmitError, retry: NETWORK.RETRY_COUNT }
  );

  return (
    <BottomSheet title="?????? ?????????" closeSheet={closeSheet}>
      <S.Form onSubmit={handleSubmitRequest}>
        <S.Label htmlFor="menu-input">?????? ??????</S.Label>
        <S.MenuInput
          id="menu-input"
          value={menuInput}
          onChange={handleMenuInput}
          maxLength={20}
          required
        />
        <S.Label htmlFor="review">??????</S.Label>
        <S.ReviewTextArea
          id="review"
          value={reviewContent}
          onChange={handleContentInput}
          maxLength={255}
          required
        />
        <S.BottomWrapper>
          <S.StarRatingWrapper>
            <S.Label>??????</S.Label>
            <StarRating rating={rating} setRating={setRating} />
          </S.StarRatingWrapper>
          <S.SubmitButton>??????</S.SubmitButton>
        </S.BottomWrapper>
      </S.Form>
    </BottomSheet>
  );
}

export default ReviewInputBottomSheet;
