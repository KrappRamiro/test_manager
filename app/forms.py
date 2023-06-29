from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FileField, FieldList, FormField, SubmitField
from wtforms.validators import DataRequired


class TestSubForm(FlaskForm):
    name = StringField("Nombre", validators=[DataRequired()])
    description = TextAreaField("Descripción", validators=[DataRequired()])
    file = FileField("Archivo", validators=[DataRequired()])


class TestsForm(FlaskForm):
    subforms = FieldList(FormField(TestSubForm))
    submit = SubmitField("Enviar")
