import {
  Button,
  HStack,
  Image,
  Img,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export type GenreListProps = {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
};

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return;

  return (
    <>
      <List>
        {data.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => onSelectGenre(genre)}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : ""}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
