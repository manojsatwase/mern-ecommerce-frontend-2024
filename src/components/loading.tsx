import {FC} from 'react';
const Loading: FC  = () => {
  return (
    <section className="loader">
      <div></div>
    </section>
  )
}

export default Loading;


interface SkeletonProps {
  width?: string;
  length?: number;
}

export const SkeletonLoading = ({ width = "unset", length = 3 }: SkeletonProps) => {
  const skeletions = Array.from({ length }, (_, idx) => (
    <div key={idx} className="skeleton-shape"></div>
  ));

  return (
    <div className="skeleton-loader" style={{ width }}>
      {skeletions}
    </div>
  );
};
