import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../__mocks__/createMockRouter";
import Dashboard from "@/pages/admin/dashboard";
import Create from "@/pages/admin/dashboard/create";

describe("ADMIN - ROUTES", () => {
  describe("DASHBOARD", () => {
    it("Deberia tener el titulo de 'dashboard'", () => {
      const router = createMockRouter({ pathname: "/admin/dashboard" });
      render(
        <RouterContext.Provider value={router}>
          <Dashboard />
        </RouterContext.Provider>
      );

      expect(
        screen.getByRole("heading", { name: /dashboard/i })
      ).toBeInTheDocument();
    });

    it("Deberia tener las imagenes y titulos de los lenguajes", () => {
      const router = createMockRouter({ pathname: "/admin/dashboard" });
      render(
        <RouterContext.Provider value={router}>
          <Dashboard />
        </RouterContext.Provider>
      );

      expect(
        screen.getByRole("img", { name: /javascript/i })
      ).toBeInTheDocument();
      expect(screen.getByRole("img", { name: /react/i })).toBeInTheDocument();
      expect(
        screen.getByRole("img", { name: /typescript/i })
      ).toBeInTheDocument();
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

  describe("CREATE", () => {
    it("Deberia tener el titulo de crear", () => {
      const router = createMockRouter({
        pathname: "/admin/dashboard/create?lang=JavaScript",
      });
      render(
        <RouterContext.Provider value={router}>
          <Create />
        </RouterContext.Provider>
      );

      expect(
        screen.getByText( /crear nueva pregunta de/i )
      ).toBeInTheDocument();
    });

    it("Deberia tener en el titulo el lenguaje", () => {
      const router = createMockRouter({
        pathname: "/admin/dashboard/create?lang=TypeScript",
      });
      render(
        <RouterContext.Provider value={router}>
          <Create />
        </RouterContext.Provider>
      );

      expect(
        screen.getAllByText( /typescript/i )[0]
      ).toBeInTheDocument();
    });

    it("Deberia tener un Link para volver hacia atras", async () => {
      const router = createMockRouter({
        pathname: "/admin/dashboard/create?lang=JavaScript",
      });
      render(
        <RouterContext.Provider value={router}>
          <Create />
        </RouterContext.Provider>
      );

      expect(screen.getByRole("link", { name: /volver al dashboard/i })).toBeInTheDocument();

      await userEvent.click(screen.getByRole("link", { name: /volver al dashboard/i }));

      const pushed = router.push;

      expect(pushed).toHaveBeenCalledWith("/admin/dashboard", "/admin/dashboard", {
        locale: undefined,
        scroll: true,
        shallow: undefined,
      });
    });
  });

  describe("UPDATE", () => {});
});

// it("", () => {});
