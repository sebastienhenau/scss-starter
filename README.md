# Styling Starter

> An opinionated configuration of a styling setup based on tailwind in
> combination with css custom properties, custom PostCSS and Tailwind plugins,
> all served by Vite.

## TODO

- Add prose tailwind typography
- Test a bit more
- preset?

## Rules

- **Breakpoints** should always be expressed in **em**.
  [Why?](https://zellwk.com/blog/media-query-units/)
- For **spacing**, make use of a [fluid spacing scale](https://utopia.fyi/) to
  avoid constantly using breakpoints. For example: scale `1.25`.
- For **font-sizes**, make use of a [fluid font-size scale](https://utopia.fyi/)
  to avoid constantly using breakpoints. For example: scale `1.25`.
- Use **css variables** for spacing, font-sizes, font-family and colors in order
  for these to be easily overwritten by themes for example.
- Use **typographic styles** to create consistency for your typography instead
  of applying each property separately on the element.
- Use the correct units:
  - **Border Width** _px_ Relative borders get ugly
  - **Icon sizes** _em_ When used inline with texts
  - **Margin** _rem_ Margin between for example heading and paragraph
  - **Padding** _rem_ except for when using with buttons to create different
    button sizes, then it should be _em_
  - **Root font size**: 100%
  - **Font size**: _rem_ scale along with the root font size
  - **Line height**: scalable values without a unit like `1.5`, unless you want
    to define a vertical rhythm.

## PostCSS functions

Gives the ability to create custom JavaScript functions and execute them when
PostCSS compiles the css.

### rem

Use the `rem` function in css to convert a value from _pixels_ or _em_ to
**rem**.

`rem(value: string, hasUnit: boolean)`

- value: the css number to convert
- hasUnit: indicate wether to return a unit or not

```css
.selector {
  width: rem(112px); /* 7rem */
  height: rem(112px, false); /* 7 */
}

.selector {
  width: rem(48em);
}
```

### em

Use the `em` function in css to convert a value from _px_ to **em**.

`em(value: string, hasUnit: boolean)`

- value: the css number to convert
- hasUnit: indicate wether to return a unit or not

```css
.selector {
  width: em(124px);
}
```

### px

Use the `px` function in css to convert a value from _rem_ or _em_ to **px**.

`px(value: string, hasUnit: boolean)`

- value: the css number to convert
- hasUnit: indicate wether to return a unit or not

```css
.selector {
  width: px(48rem);
}

.selector {
  width: px(48eem);
}
```

## Tailwind plugins

### section

A layout element to create spacing on top and on the bottom of a region on a
site. Usually used on top level for separating content within the
`<main></main>`.

```js
// tailwind.config.js
module.exports = {
  plugins: [require("./.tailwind/plugins/section")],
  theme: {
    section: {
      sm: 1
      md: {
        DEFAULT: 2,
        md: 4,
        lg: 6,
      },
      lg: {
        DEFAULT: 3,
        md: 6,
        lg: 9,
      }
    },
    spacing: {
      1: "10px",
      2: "20px",
      3: "30px",
      4: "40px",
      6: "60px",
      9: "90px",
    },
    screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
		},
  }
};
```

The key of each item in the `section` object is the name of the type of section.
There are two ways to define a section:

- Pass a **number**
- Pass an **object**

When passing a **number**, the number should represent the name of the Tailwind
spacing you want to apply.

When passing an **object**, the object should contain the keys of each of the
breakpoints defined in the Tailwind screens object. The value of each breakpoint
should represent the name of the Tailwind spacing you want to apply, at that
breakpoint. The keyword `DEFAULT` should be used as a fallback, when no
breakpoint is applied.

```html
<div class="section-sm"></div>

<div class="section-md"></div>

<div class="section-lg"></div>
```

### flow

A layout element used to divide the header, contents and footer of a section or
region on the site. Mainly used in combination with the `.section` class.

```js
// tailwind.config.js
module.exports = {
  plugins: [require("./.tailwind/plugins/flow")],
  theme: {
    flow: {
      sm: 1
      md: {
        DEFAULT: 2,
        md: 4,
        lg: 6,
      },
      lg: {
        DEFAULT: 3,
        md: 6,
        lg: 9,
      }
    },
    spacing: {
      1: "10px",
      2: "20px",
      3: "30px",
      4: "40px",
      6: "60px",
      9: "90px",
    },
    screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
		},
  }
};
```

The key of each item in the `flow` object is the name of the type of section.
There are two ways to define a section:

- Pass a **number**
- Pass an **object**

When passing a **number**, the number should represent the name of the Tailwind
spacing you want to apply.

When passing an **object**, the object should contain the keys of each of the
breakpoints defined in the Tailwind screens object. The value of each breakpoint
should represent the name of the Tailwind spacing you want to apply, at that
breakpoint. The keyword `DEFAULT` should be used as a fallback, when no
breakpoint is applied.

```html
<div class="flow-sm"></div>

<div class="flow-md"></div>

<div class="flow-lg"></div>
```

### cssVariables

Generates css variables for the Tailwind theme keys `spacing`, `fontFamily`,
`fontSize` and `colors`. This allows css variables to be overwritten by other
themes for example or they can be used in your regular css files.

Each of the items defined within `spacing`, `fontFamily`, `fontSize` and
`colors` is added to the base layer as a css variable and afterwards is added to
the theme with that same name, but instead of the value that you passed, the
respective css variable is applied, which contains your value.

```js
// tailwind.config.js
module.exports = {
  plugins: [require("./.tailwind/plugins/cssVariables")],
  theme: {
    cssVariables: {
      spacing: {
        1: "10px",
        2: "20px",
        3: "30px",
      },
      fontFamily: {
        primary: "Roboto",
      },
      fontSize: {
        1: "8px",
        2: "16px",
        3: "24px",
      },
      colors: {
        "primary-400": "0 100% 60%",
        "primary-500": "0 100% 50%",
        "primary-600": "0 100% 40%",
      },
    },
  },
};
```

This config generates these css variables

```css
:root {
  --space-1: 10px;
  --space-2: 20px;
  --space-3: 30px;

  --font-family-primary: "Roboto";

  --font-size-1: 10px;
  --font-size-2: 20px;
  --font-size-3: 30px;

  --color-primary-400: hsl(0 100% 60%);
  --color-primary-500: hsl(0 100% 50%);
  --color-primary-600: hsl(0 100% 40%);
}
```

This config also converts the theme to this:

```js
// tailwind.config.js
module.exports = {
  plugins: [require("./.tailwind/plugins/cssVariables")],
  theme: {
    spacing: {
      1: "var(--space-1)",
      2: "var(--space-2)",
      3: "var(--space-3)",
    },
    fontFamily: {
      primary: "var(--font-family-primary)",
    },
    fontSize: {
      1: "var(--font-size-1)",
      2: "var(--font-size-2)",
      3: "var(--font-size-3)",
    },
    colors: {
      "primary-400": "var(--color-primary-400)",
      "primary-500": "var(--color-primary-500)",
      "primary-600": "var(--color-primary-600)",
    },
  },
};
```

### fontStyles

Define an object of typographic styles. Each style is a combination of
typographic properties that define a semantic element. Each of these styles is
prepended by the class `.typo-`. The name of the `screens` can be used within to
add a breakpoint when the style should change.

```js
// tailwind.config.js
module.exports = {
  plugins: [require("./.tailwind/plugins/fontStyles")],
  theme: {
    fontStyles: {
      h1: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "42px",
        lineHeight: "1.5",
        letterSpacing: "1",
      },
      p: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "1.5",
        letterSpacing: "1",
        md: {
          fontSize: "24px",
        },
      },
    },
  },
};
```

```html
<div class="typo-h1"></div>

<div class="typo-p"></div>
```

### schemes

A list of color palettes used to create different versions, in color, of a group
of elements. When naming schemes it should always follow the name of the base
color applied. The scheme defines css variables that can be used by respective
utility classes like `prop-bg` or `prop-color` to apply the color scheme. This
allows to use just one class to change the color representation on an element.

```js
// tailwind.config.js
module.exports = {
  plugins: [require("./.tailwind/plugins/schemes")],
  theme: {
    schemes: ({ theme }) => ({
      red: {
        base: theme("colors.red"),
        contrast: theme("colors.white"),
      },
      blue: {
        base: theme("colors.blue"),
        contrast: theme("colors.white"),
      },
    }),
    colors: {
      red: "red",
      white: "white",
      blue: "blue",
    },
  },
};
```

```html
<section class="scheme-red prop-bg">
  <h1 class="prop-color">Title</h1>
</section>

<section class="scheme-blue prop-bg">
  <h1 class="prop-color">Title</h1>
</section>
```

### container

A centralized wrapper element for fixing the content in the middle of the screen
and limiting the width of the content. By default the container plugin generates
a default `container` class based on the parameters passed to the plugin. Next
to that, other containers, based on the Tailwind `screens` key are generated for
each of the breakpoints.

There are different container classes being generated per container. Do note
that for each custom container, the name of that container is added at the end
of the classes:

- `.container-space-l`: spacing on the left
- `.container-space-r`: spacing on the right
- `.container-space-t`: spacing on the top
- `.container-space-b`: spacing on the bottom
- `.container-space-x`: spacing on the left and right
- `.container-space-y`: spacing on the top and bottom
- `.container-space`: spacing on the top, bottom, left and right
- `.container`: centered with a max-width
- `.container-l`: centered, but limited only on the left side. Use
  container-offset on the same element to add padding on the right side to limit
  the content within on the right as well.
- `.container-r`: centered, but limited only on the right side. Use
  container-offset on the same element to add padding on the left side to limit
  the content within on the left as well.
- `.container-inset`: centered, instead of max-width, padding is added, based on
  the max-width on the left and right side. Any spacing container class cannot
  be used on the same element.

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require("./.tailwind/plugins/container")({
      maxWidth: "1440px",
      spacing: {
        DEFAULT: 1,
        md: 2,
        lg: 3,
      },
    }),
  ],
  theme: {
    spacing: {
      1: "10px",
      2: "20px",
      3: "30px",
      4: "40px",
      6: "60px",
      9: "90px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      container: {
        500: "500px",
      },
    },
  },
};
```

**max-width**: Maximum width of the default container.

**spacing**: Responsive spacing to use when resizing the viewport. This is an
object where the key is the name of a breakpoint defined in tailwind.config.js
`screens`. The value is the name of the spacing value defined in
tailwind.config.js `spacing`.

Custom containers can be generated by adding an `container` key to the theme.
The key of these containers are the name of the container that can be used as a
class and the value is the maximum width of the container. The spacing defined
in the plugins parameters is used for all the containers.

```html
<div class="container">Container</div>
<div class="container-space-l">Container</div>
<div class="container-space-r">Container</div>
<div class="container-space-t">Container</div>
<div class="container-space-b">Container</div>
<div class="container-space-x">Container</div>
<div class="container-space-y">Container</div>
<div class="container-space">Container</div>
<div class="container">Container</div>
<div class="container-l">Container</div>
<div class="container-l container-offset">Container</div>
<div class="container-r">Container</div>
<div class="container-r container-offset">Container</div>
<div class="container-inset">Container</div>
<div class="container-sm">Container</div>
<div class="container-l-sm">Container</div>
<div class="container-r-sm">Container</div>
<div class="container-500">Container</div>
<div class="container-l-500">Container</div>
<div class="container-r-500">Container</div>
```

### fullBleed

A layout element to make sure the content goes out of the bounds when limited by
a max-width, as used in for example: a container. This should only be used on a
child when a containing element is used to wrap its content.

```js
// tailwind.config.js
module.exports = {
  plugins: [require("./.tailwind/plugins/fullBleed")],
};
```

```html
<div class="container">
  <div class="full-bleed">
    <p>Full bleed</p>
  </div>
</div>
```
