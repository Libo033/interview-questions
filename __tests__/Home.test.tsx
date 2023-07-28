import Home from "@/pages";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("HOME", () => {
  it("Deberia existir el titulo y la descripcion", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /explora y aprende diferentes preguntas para tu proxima entrevista/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /tu destino definitivo para aprender, resolver dudas y sumergirte en el fascinante mundo de la programación\. ya seas un principiante entusiasta o un programador experimentado, aquí encontrarás una amplia variedad de preguntas y respuestas sobre diversos lenguajes de programación que podras usar para practicar para tus proximas entrevistas\./i
      )
    ).toBeInTheDocument();
  });

  it("Deberia cargar las imagenes", () => {
    render(<Home />);

    expect(screen.getByRole('img', {  name: /javascript/i})).toBeInTheDocument();
    expect(screen.getByRole('img', {  name: /react/i})).toBeInTheDocument();
    expect(screen.getByRole('img', {  name: /typescript/i})).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it("Deberia cargar las preguntas destacadas", () => {
    render(<Home />);

    expect(screen.getByText(/preguntas destacadas javascript:/i)).toBeInTheDocument();
    expect(screen.getByText(/preguntas destacadas react:/i)).toBeInTheDocument();
    expect(screen.getByText(/preguntas destacadas typescript:/i)).toBeInTheDocument();
  });
});
