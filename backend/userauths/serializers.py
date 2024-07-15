# serializers.py
from rest_framework import serializers
from .models import Material
from .models import Profile


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = ['id', 'title', 'description', 'file', 'uploaded_by', 'upload_date']
        read_only_fields = ['uploaded_by', 'upload_date']
# user/serializers.py


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'  # or specify fields explicitly: ['image', 'full_name', 'country', 'about', 'date']
