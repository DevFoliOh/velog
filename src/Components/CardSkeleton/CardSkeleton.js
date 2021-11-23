import { style } from './CardSkeletonStyle';

const CardSkeleton = () => {
  return (
    <CardBox>
      <ImageWrap>
        <Shimmer />
      </ImageWrap>
      <ContentWrap>
        <ContentLineFirst>
          <Shimmer />
        </ContentLineFirst>
        <ContentLine>
          <Shimmer />
        </ContentLine>
      </ContentWrap>
    </CardBox>
  );
};

export default CardSkeleton;

const {
  CardBox,
  ImageWrap,
  ContentLine,
  ContentLineFirst,
  ContentWrap,
  Shimmer,
} = style;
