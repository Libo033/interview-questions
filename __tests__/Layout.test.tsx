import Layout from "@/components/Layout";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("LAYOUT", () => {
  it("Deberia existir el navbar", () => {
    render(
      <Layout title="JavaScript">
        <div>HOLA</div>
      </Layout>
    );

    expect(screen.getByText(/q&a/i)).toBeInTheDocument();
    expect(screen.getByText(/javascript/i)).toBeInTheDocument();
    expect(screen.getByText(/react/i)).toBeInTheDocument();
    expect(screen.getByText(/typescript/i)).toBeInTheDocument();
  });

  it("Deberia existir el footer", () => {
    render(
      <Layout title="JavaScript">
        <div>HOLA</div>
      </Layout>
    );

    expect(screen.getByText(/valentin libonati/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /mi linkedin/i})).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /mi portfolio/i})).toBeInTheDocument();
  });
});
