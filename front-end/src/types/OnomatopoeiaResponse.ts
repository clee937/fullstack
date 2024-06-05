type OnomatopoeiaResponse = {
  id: number;
  onomatopoeia: string;
  meaning: string;
  example: string;
  categoryId: number;
  category: { id: number; name: string; categoryInfo: string };
};

export default OnomatopoeiaResponse;
