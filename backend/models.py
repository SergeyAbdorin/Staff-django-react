from django.db import models
from django.core.validators import RegexValidator


class Department(models.Model):

    title = models.CharField(max_length=100, verbose_name="Наименование отдела", null=False, blank=False)
    #slug = models.SlugField(unique=True)

    # Визуальное отображение модели
    def __str__(self):
        return f'{self.title}'

    class Meta:
        db_table = 'Departments'  # Наименование таблицы в базе
        ordering = ['title']  # Сортировать по


class Employee(models.Model):

    last_name = models.CharField(max_length=30, verbose_name="Фамилия", null=False, blank=False)
    first_name = models.CharField(max_length=30, verbose_name="Имя", null=False, blank=False)
    middle_name = models.CharField(max_length=30, verbose_name="Отчество", blank=True)
    position = models.CharField(max_length=30, verbose_name="Должность", blank=True)
    birthday = models.DateField(blank=True, null=False)
    email = models.EmailField(null=False, blank=False)
    department = models.ForeignKey(Department, verbose_name="Отдел", on_delete=models.CASCADE, null=False, blank=False)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Номер телефона должен быть в формате: '+9999999999'. Максимум 15 символов.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, null=False, blank=False)
    image = models.ImageField(upload_to='uploads/images', blank=True, null=True)
    #slug = models.SlugField(unique=True)

    def __str__(self):
        return f'{self.last_name} {self.first_name} {self.middle_name}, {self.position} - {self.department.title}'

    class Meta:
        db_table = 'Staff'  # Наименование таблицы в базе
        ordering = ['last_name', 'position']  # Сортировать по