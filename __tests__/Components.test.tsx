import CreateForm from "@/components/CreateForm";
import Footer from "@/components/Footer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../__mocks__/createMockRouter";
import UpdateForm from "@/components/UpdateForm";
import QuestionBox from "@/components/QuestionBox";
import LoginForm from "@/components/LoginForm";
import IDrawer from "@/components/IDrawer";
import Navbar from "@/components/Navbar";

describe("COMPONENTES", () => {
  describe("CREATE FORM", () => {
    it("Deberia contener un titulo y un boton", () => {
      render(<CreateForm theme={"ligth"} lang={"JavaScript"} />);

      expect(
        screen.getByText(/crear nueva pregunta de javascript/i)
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /crear/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/question/i)).toBeInTheDocument();
      expect(screen.getByText(/answer/i)).toBeInTheDocument();
    });
  });

  describe("FOOTER", () => {
    it("Deberia contener 'VALENTIN LIBONATI'", () => {
      render(<Footer theme={"ligth"} />);

      expect(screen.getByText(/valentin libonati/i)).toBeInTheDocument();
    });

    it("Deberia contener mi linkedin y mi pagina", () => {
      render(<Footer theme={"ligth"} />);

      expect(
        screen.getByRole("link", { name: /mi linkedin/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /mi portfolio/i })
      ).toBeInTheDocument();
    });

    it("Deberia tener los atributos de redireccion", () => {
      render(<Footer theme={"ligth"} />);

      expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/valentin-libonati-b608521b7/"
      );
      expect(
        screen.getByRole("link", { name: /mi portfolio/i })
      ).toHaveAttribute("href", "https://valentinlibonat33.vercel.app/");
    });
  });

  describe("I DRAWER", () => {
    it("Deberia tener el nombre de la pagina", () => {
      render(<IDrawer theme={"ligth"} />);

      expect(screen.getByText(/Q&A/i)).toBeInTheDocument();
    });

    it("Deberia tener los links a JS, React y TS", () => {
      render(<IDrawer theme={"ligth"} />);

      expect(screen.getByText(/javascript/i)).toBeInTheDocument();
      expect(screen.getByText(/react/i)).toBeInTheDocument();
      expect(screen.getByText(/typescript/i)).toBeInTheDocument();
    });

    it("Los links deberian redireccionar al usuario (js)", async () => {
      const router = createMockRouter({ pathname: "/" });
      render(
        <RouterContext.Provider value={router}>
          <IDrawer theme={"ligth"} />
        </RouterContext.Provider>
      );

      await userEvent.click(screen.getByText(/javascript/i));

      const pushed = router.push;

      expect(pushed).toHaveBeenCalledWith("/javascript", "/javascript", {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });

    it("Los links deberian redireccionar al usuario (react)", async () => {
      const router = createMockRouter({ pathname: "/" });
      render(
        <RouterContext.Provider value={router}>
          <IDrawer theme={"ligth"} />
        </RouterContext.Provider>
      );

      await userEvent.click(screen.getByText(/react/i));

      const pushed = router.push;

      expect(pushed).toHaveBeenCalledWith("/react", "/react", {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });

    it("Los links deberian redireccionar al usuario (typescript)", async () => {
      const router = createMockRouter({ pathname: "/" });
      render(
        <RouterContext.Provider value={router}>
          <IDrawer theme={"ligth"} />
        </RouterContext.Provider>
      );

      await userEvent.click(screen.getByText(/typescript/i));

      const pushed = router.push;

      expect(pushed).toHaveBeenCalledWith("/typescript", "/typescript", {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });

    //it("Deberia haber un boton para cambiar el modo", () => {});
  });

  describe("LOGIN FORM", () => {
    it("Deberia tener el texto de bienvenido", () => {
      render(<LoginForm theme={"ligth"} />);

      expect(screen.getByText(/Ingresar al dashboard/i)).toBeInTheDocument();
    });

    it("Deberia tener un boton de ingresar", () => {
      render(<LoginForm theme={"ligth"} />);

      expect(screen.getByRole("button", { name: /login/i }));
    });
  });

  describe("NAVBAR", () => {
    it("Deberia tener el nombre de la pagina", () => {
      render(<Navbar theme={"ligth"} />);

      expect(screen.getByText(/Q&A/i)).toBeInTheDocument();
    });

    it("Deberia tener los links a JS, React y TS", () => {
      render(<Navbar theme={"ligth"} />);

      expect(screen.getByText(/javascript/i)).toBeInTheDocument();
      expect(screen.getByText(/react/i)).toBeInTheDocument();
      expect(screen.getByText(/typescript/i)).toBeInTheDocument();
    });

    it("Los links deberian redirreccionar al usuario (javascript)", async () => {
      const router = createMockRouter({ pathname: "/" });
      render(
        <RouterContext.Provider value={router}>
          <Navbar theme={"ligth"} />
        </RouterContext.Provider>
      );

      await userEvent.click(screen.getByText(/javascript/i));

      const pushed = router.push;

      expect(pushed).toHaveBeenCalledWith("/javascript", "/javascript", {
        locale: undefined,
        scroll: true,
        shallow: undefined,
      });
    });

    it("Los links deberian redirreccionar al usuario (react)", async () => {
      const router = createMockRouter({ pathname: "/" });
      render(
        <RouterContext.Provider value={router}>
          <Navbar theme={"ligth"} />
        </RouterContext.Provider>
      );

      await userEvent.click(screen.getByText(/react/i));

      const pushed = router.push;

      expect(pushed).toHaveBeenCalledWith("/react", "/react", {
        locale: undefined,
        scroll: true,
        shallow: undefined,
      });
    });

    it("Los links deberian redirreccionar al usuario (typescript)", async () => {
      const router = createMockRouter({ pathname: "/" });
      render(
        <RouterContext.Provider value={router}>
          <Navbar theme={"ligth"} />
        </RouterContext.Provider>
      );

      await userEvent.click(screen.getByText(/typescript/i));

      const pushed = router.push;

      expect(pushed).toHaveBeenCalledWith("/typescript", "/typescript", {
        locale: undefined,
        scroll: true,
        shallow: undefined,
      });
    });

    //it("Deberia haber un boton para cambiar de tema", () => {});

    //it("Deberia tener un boton de menu para celulares", () => {});
  });

  describe("QUESTION BOX", () => {
    it("Deberia tener la pregunta y la respuesta", () => {
      render(
        <QuestionBox
          theme={"ligth"}
          question={"Que es JavaScript?"}
          answer={"JavaScript es un lenguaje de programacion"}
          num={3}
        />
      );

      expect(screen.getByText(/que es javascript\?/i)).toBeInTheDocument();
      expect(
        screen.getByText(/JavaScript es un lenguaje de programacion/i)
      ).toBeInTheDocument();
    });

    it("Deberia tener el numero de la pregunta", () => {
      render(
        <QuestionBox
          theme={"ligth"}
          question={"Que es JavaScript?"}
          answer={"JavaScript es un lenguaje de programacion"}
          num={3}
        />
      );

      expect(screen.getByText(/3/i)).toBeInTheDocument();
    });
  });

  describe("UPDATE FORM", () => {
    it("Deberia contener un titulo y un boton", () => {
      render(<UpdateForm theme={"ligth"} lang={"TypeScript"} />);

      expect(
        screen.getByText(/modificar pregunta de typescript/i)
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /modificar/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/question/i)).toBeInTheDocument();
      expect(screen.getByText(/answer/i)).toBeInTheDocument();
    });
  });
});
