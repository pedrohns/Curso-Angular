import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Digital Tech Developer SR Analyst',
        p: 'Accenture | Desde 09/2022 até Hoje',
      },
      text: '<p>Lidero o desenvolvimento e implementação de sistemas de tecnologia digital utilizando uma variedade de tecnologias, incluindo SQL, PHP, Flutter, React.js e Node.js.</p>',
    },
    {
      summary: {
        strong: 'Líder Técnico Equipe de Projetos',
        p: 'REsight | Desde Outubro/2021 até Maio/2022',
      },
      text: '<p>Supervisiono e guio uma equipe de desenvolvedores, instruindo uma cultura de colaboração e aprendizado compartilhado. Conduzo a parte técnica da minha equipe, utilizando habilidades em React.js, Node.js, JavaScript, CSS, APIs REST e Power BI.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Software ',
        p: 'REsight | Desde Janeiro/2020 até Outubro/2021',
      },
      text: '<p>Participando de projetos com alta complexidade, como o desevolvimento de um ETL inteiro para um cliente, extraindo as informações utilizando linguagens PHP e SQL e transpondo a informação em gráficos utilizando o Power BI. Após a implantação deste serviço, também fiquei encarregado do suporte aos dados e desenvolvimento de melhorias, tanto na extração, quanto na visualização dos dados.</p>',
    },
  ]);
}
