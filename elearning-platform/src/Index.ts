export interface Course {
  id: number;
  title: string;
  category: string;
  progress: number; // Requis pour l'affichage de la progression[span_1](end_span)
  image: string;
}