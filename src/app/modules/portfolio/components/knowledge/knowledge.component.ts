import { Component, signal } from "@angular/core";
import { IKnowledge } from "../../interface/IKnowledge.interface";

@Component({
  selector: "app-knowledge",
  standalone: true,
  imports: [],
  templateUrl: "./knowledge.component.html",
  styleUrl: "./knowledge.component.scss",
})
export class KnowledgeComponent {
  arrayKnowledge = signal<IKnowledge[]>([
    {
      src: "assets/icons/knowledge/html5.svg",
      alt: "Ícone HTML5",
    },
    {
      src: "assets/icons/knowledge/css3.svg",
      alt: "Ícone CSS",
    },
    {
      src: "assets/icons/knowledge/javascript.svg",
      alt: "Ícone JavaScript",
    },
    {
      src: "assets/icons/knowledge/angular.svg",
      alt: "Ícone Angular",
    },
    {
      src: "assets/icons/knowledge/nodejs.svg",
      alt: "Ícone NodeJS",
    },
    {
      src: "assets/icons/knowledge/flutter.svg",
      alt: "Ícone Flutter",
    },
    {
      src: "assets/icons/knowledge/sql.svg",
      alt: "Ícone SQL",
    },
  ]);
}
