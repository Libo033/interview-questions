import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../__mocks__/createMockRouter";
import Dashboard from "@/pages/admin/dashboard";

describe('ADMIN - ROUTES', () => {
  describe('DASHBOARD', () => {
    it("Deberia tener el titulo de 'dashboard'", () => {
      const router = createMockRouter({ pathname: "/admin/dashboard" });
      render(
        <RouterContext.Provider value={router}>
          <Dashboard />
        </RouterContext.Provider>
      );

      expect(screen.getByRole('heading', {  name: /dashboard/i})).toBeInTheDocument();
    });

    it("Deberia tener las imagenes y titulos de los lenguajes", () => {
      const router = createMockRouter({ pathname: "/admin/dashboard" });
      render(
        <RouterContext.Provider value={router}>
          <Dashboard />
        </RouterContext.Provider>
      );

      expect(screen.getByRole('img', {  name: /javascript/i})).toBeInTheDocument();
      expect(screen.getByRole('img', {  name: /react/i})).toBeInTheDocument();
      expect(screen.getByRole('img', {  name: /typescript/i})).toBeInTheDocument();
    });

    it("Deberia estar los textos de crear y modificar", () => {
      const router = createMockRouter({ pathname: "/admin/dashboard" });
      render(
        <RouterContext.Provider value={router}>
          <Dashboard />
        </RouterContext.Provider>
      );

      expect(screen.getAllByText(/modificar/i).length).toEqual(3);
      expect(screen.getAllByText(/crear/i).length).toEqual(3);
    });
  });

  describe('CREATE', () => {

  });

  describe('UPDATE', () => {
    
  });
});

// it("", () => {});