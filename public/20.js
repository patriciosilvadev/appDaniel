(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      usuarios: [],
      url: '/api/administrador/usuarios',
      pagination: [],
      matricualdor: [],
      cobrador: []
    };
  },
  mounted: function mounted() {
    var app = this;
    app.VerUsuarios();
  },
  methods: {
    VerUsuarios: function VerUsuarios() {
      var app = this;
      axios.get(app.url).then(function (res) {
        app.usuarios = res.data.data;
        app.MakePagination(res.data);
      })["catch"](function (res) {
        app.$router.replace('/SinAcceso');
      });
    },
    MakePagination: function MakePagination(data) {
      var app = this;
      var pagination = {
        current_page: data.current_page,
        last_page: data.last_page,
        next_page_url: data.next_page_url,
        prev_page_url: data.prev_page_url,
        total: data.total
      };
      app.pagination = pagination;
    },
    fetchPaginationUsers: function fetchPaginationUsers(url) {
      var app = this;
      app.url = url;
      app.VerUsuarios();
    },
    deleteEntry: function deleteEntry(id, index) {
      if (confirm("Do you really want to delete it?")) {
        var app = this;
        axios["delete"]('/api/administrador/usuarios/' + id).then(function (res) {
          app.usuarios.splice(index, 1);
        })["catch"](function (res) {
          alert("Could not delete company");
        });
      }
    },
    AsignMatriculador: function AsignMatriculador(usuario) {
      var _this = this;

      var app = this.matricualdor;
      app.id_usuario = usuario.id, app.id_departamento = usuario.id_departamento, app.id_provincia = usuario.id_provincia, app.id_distrito = usuario.id_distrito;
      var appMatriculador = {
        id_usuario: app.id_usuario,
        id_departamento: app.id_departamento,
        id_provincia: app.id_provincia,
        id_distrito: app.id_distrito
      };
      axios.post('/api/administrador/matriculador', appMatriculador).then(function (res) {
        var app = _this; // app.$router.push({path: '/Usuarios/Visualizar'});

        app.$Progress.start();
        toast.fire({
          icon: 'success',
          title: 'Registro Creado'
        });
        var x = document.getElementById(usuario.id);
        var params = {
          flag_Matriculador: 'activo'
        };
        console.log(params);
        axios.patch("/api/administrador/flagMatriculador/".concat(usuario.id), params);
        app.VerUsuarios();
      })["catch"](function (res) {
        var app = _this;
        app.$Progress.fail();
        toast.fire({
          icon: 'error',
          title: 'Error en los Datos'
        });
        console.log(res);
      });
    },
    AsignCobrador: function AsignCobrador(usuario) {
      var _this2 = this;

      var app = this.cobrador;
      app.id_usuario = usuario.id, app.id_departamento = usuario.id_departamento, app.id_provincia = usuario.id_provincia, app.id_distrito = usuario.id_distrito;
      var appCobrador = {
        id_usuario: app.id_usuario,
        id_departamento: app.id_departamento,
        id_provincia: app.id_provincia,
        id_distrito: app.id_distrito
      };
      axios.post('/api/administrador/cobrador', appCobrador).then(function (res) {
        var app = _this2; // app.$router.push({path: '/Usuarios/Visualizar'});

        app.$Progress.start();
        toast.fire({
          icon: 'success',
          title: 'Registro Creado'
        });
        var x = document.getElementById(usuario.id);
        var params = {
          flag_Cobrador: 'activo'
        };
        console.log(params);
        axios.patch("/api/administrador/flagCobrador/".concat(usuario.id), params);
        app.VerUsuarios();
      })["catch"](function (res) {
        var app = _this2;
        app.$Progress.fail();
        toast.fire({
          icon: 'error',
          title: 'Error en los Datos'
        });
        console.log(res);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=template&id=5f3dcd7f&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=template&id=5f3dcd7f& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card card-primary" }, [
      _c(
        "div",
        { staticClass: "card-header" },
        [
          _c("b", [
            _vm._v(" Visualizar Usuarios  -  "),
            _c("span", [_vm._v(_vm._s(_vm.pagination.total) + " Registros")])
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "float-right",
              attrs: { to: { name: "RegistrarUsuario" } }
            },
            [_vm._v("\n                Agregar\n            ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "table-responsive-xl" }, [
          _c(
            "table",
            {
              staticClass:
                "table table table-hover table-striped table-bordered table-sm text-center"
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.usuarios, function(usuario, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    usuario.flag_Matriculador === "activo" &&
                    usuario.flag_Cobrador === "activo"
                      ? _c("td", [
                          _c("i", {
                            staticClass: "nav-icon fas fa-id-badge text-red",
                            attrs: { title: "Matriculador" }
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "nav-icon fas fa-id-badge text-success",
                            attrs: { title: "Cobrador" }
                          }),
                          _vm._v(
                            " \n                                " +
                              _vm._s(_vm._f("tolowercase")(usuario.username)) +
                              " \n                            "
                          )
                        ])
                      : usuario.flag_Matriculador === "activo"
                      ? _c("td", [
                          _c("i", {
                            staticClass:
                              "nav-icon fas fa-id-badge float-right text-red",
                            attrs: { title: "Matriculador" }
                          }),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm._f("tolowercase")(usuario.username)) +
                              "\n                            "
                          )
                        ])
                      : usuario.flag_Cobrador === "activo"
                      ? _c("td", [
                          _c("i", {
                            staticClass:
                              "nav-icon fas fa-id-badge float-right text-success",
                            attrs: { title: "Cobrador" }
                          }),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm._f("tolowercase")(usuario.username)) +
                              "\n                            "
                          )
                        ])
                      : _c("td", [_vm._v(_vm._s(usuario.username))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(usuario.email))]),
                    _vm._v(" "),
                    usuario.id_rol === 1
                      ? _c("td", [_vm._v("Administrador")])
                      : usuario.id_rol === 2
                      ? _c("td", [_vm._v("Administrativo")])
                      : usuario.id_rol === 3
                      ? _c("td", [_vm._v("Asesor")])
                      : usuario.id_rol === 4
                      ? _c("td", [_vm._v("Recuperador")])
                      : _vm._e(),
                    _vm._v(" "),
                    !usuario.id_rol
                      ? _c("td", [_vm._v("Sin Ningun Rol")])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(usuario.created_at))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(usuario.updated_at))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", { staticClass: "dropdown" }, [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-toggle text",
                            attrs: {
                              href: "#",
                              role: "button",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                        Opciones\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "dropdown-menu",
                            attrs: { "aria-labelledby": "dropdownMenuLink" }
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "dropdown-item",
                                attrs: {
                                  to: {
                                    name: "EditarUsuario",
                                    params: {
                                      id: usuario.id,
                                      name: usuario.name
                                    }
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            Editar\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "dropdown-item",
                                attrs: {
                                  to: {
                                    name: "PerfilUsuario",
                                    params: { id: usuario.id }
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            Perfl\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteEntry(usuario.id, index)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            Eliminar\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: {
                                  href: "#",
                                  title: "Asignar Matriculador"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.AsignMatriculador(usuario)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            Matriculador\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#", title: "Asignar Cobrador" },
                                on: {
                                  click: function($event) {
                                    return _vm.AsignCobrador(usuario)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            Cobrador\n                                        "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ])
                }),
                0
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer" }, [
        _vm._v("\n             Referencia : \n             "),
        _c("i", {
          staticClass: "nav-icon fas fa-id-badge text-red",
          attrs: { title: "Matriculador" }
        }),
        _vm._v(" - \n             "),
        _c("i", {
          staticClass: "nav-icon fas fa-id-badge text-success",
          attrs: { title: "Cobrador" }
        }),
        _vm._v(" "),
        _c("ul", { staticClass: "pagination float-right" }, [
          _c("li", { staticClass: "page-item" }, [
            _c(
              "button",
              {
                staticClass: "btn page-link",
                attrs: { disabled: !_vm.pagination.prev_page_url },
                on: {
                  click: function($event) {
                    return _vm.fetchPaginationUsers(
                      _vm.pagination.prev_page_url
                    )
                  }
                }
              },
              [
                _vm._v(
                  "\n                        Anterior\n                    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "page-item " }, [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.pagination.current_page))
            ])
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.pagination.last_page))
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c(
              "button",
              {
                staticClass: "btn page-link",
                attrs: { disabled: !_vm.pagination.next_page_url },
                on: {
                  click: function($event) {
                    return _vm.fetchPaginationUsers(
                      _vm.pagination.next_page_url
                    )
                  }
                }
              },
              [
                _vm._v(
                  "\n                        Siguiente\n                    "
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("N° Lista")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Correo Electronico")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Accseso")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Fecha de Creacion")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [
          _vm._v("Fecha de Actualizacion")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Opciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "page-item " }, [
      _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
        _vm._v("de")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Administrador/Usuarios/Visualizar.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Administrador/Usuarios/Visualizar.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Visualizar_vue_vue_type_template_id_5f3dcd7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Visualizar.vue?vue&type=template&id=5f3dcd7f& */ "./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=template&id=5f3dcd7f&");
/* harmony import */ var _Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Visualizar.vue?vue&type=script&lang=js& */ "./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Visualizar_vue_vue_type_template_id_5f3dcd7f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Visualizar_vue_vue_type_template_id_5f3dcd7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Administrador/Usuarios/Visualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Visualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=template&id=5f3dcd7f&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=template&id=5f3dcd7f& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_5f3dcd7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Visualizar.vue?vue&type=template&id=5f3dcd7f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Usuarios/Visualizar.vue?vue&type=template&id=5f3dcd7f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_5f3dcd7f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_5f3dcd7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);