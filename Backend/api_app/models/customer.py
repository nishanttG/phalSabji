from django.db import models

class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)
    email = models.EmailField(unique=True)  # Add unique=True to enforce uniqueness
    password = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    def register(self):
        self.save()

    @staticmethod
    def get_customer_by_email(email):
        try:
            return Customer.objects.get(email=email)
        except Customer.DoesNotExist:  # Specify the specific exception to catch
            return None

    def is_exists(self):
        return Customer.objects.filter(email=self.email).exists()  # Simplify the isExists method

# from django.contrib.auth.models import User
# from django.db import models

# class Customer(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     phone = models.CharField(max_length=10)

#     def __str__(self):
#         return self.user.username

#     @staticmethod
#     def create_customer(first_name, last_name, password, email, phone):
#         # Create a username by combining first name and last name
#         username = (first_name + last_name).lower()

#         # Create a new User object
#         user = User.objects.create_user(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
        
#         # Create a new Customer object associated with the User
#         customer = Customer.objects.create(user=user, phone=phone)
        
#         return customer

