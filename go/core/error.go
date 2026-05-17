package core

type GeodescriptionError struct {
	IsGeodescriptionError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGeodescriptionError(code string, msg string, ctx *Context) *GeodescriptionError {
	return &GeodescriptionError{
		IsGeodescriptionError: true,
		Sdk:              "Geodescription",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GeodescriptionError) Error() string {
	return e.Msg
}
