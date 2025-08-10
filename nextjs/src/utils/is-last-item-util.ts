interface IsLastItemProps {
  index: number;
  length: number;
}

export const isLastItem = ({ index, length }: IsLastItemProps) => (
  index === length - 1
);
