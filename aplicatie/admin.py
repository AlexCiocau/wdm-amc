from django.contrib import admin

from .models.utilizator import Utilizator
from .models.tip_utilizator import TipUtilizator
from .models.Model_Echipa import Echipa
from .models.Model_Eveniment import Eveniment
# Register your models here.

admin.site.register(Utilizator)
admin.site.register(TipUtilizator)
admin.site.register(Echipa)
admin.site.register(Eveniment)
