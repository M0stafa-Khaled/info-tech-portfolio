import { Skeleton, SkeletonLine } from "keep-react";

const CategoryCardSkeleton = () => {
  return (
    <Skeleton>
      <SkeletonLine className="h-36 w-full bg-muted" />
    </Skeleton>
  );
};

export default CategoryCardSkeleton;
