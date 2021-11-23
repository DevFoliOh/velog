import { style } from './CardSkeletonStyle';

const CardSkeleton = () => {
  return (
    <CardBox>
      <ImageWrap>
        <Shimmer />
      </ImageWrap>
      <PostInfoWrap>
        <TitleLine>
          <Shimmer />
        </TitleLine>
        <ContentLine>
          <Shimmer />
        </ContentLine>
        <ContentLine>
          <Shimmer />
        </ContentLine>
        <ContentLine>
          <Shimmer />
        </ContentLine>
      </PostInfoWrap>
    </CardBox>
  );
};

export default CardSkeleton;

const { CardBox, ImageWrap, PostInfoWrap, TitleLine, ContentLine, Shimmer } =
  style;
