# ---- Stage 1: Build Angular frontend ----
FROM node:18 AS frontend-build
WORKDIR /app/frontend
COPY frontend/ .
RUN npm install && npm run build

# ---- Stage 2: Build Spring Boot backend ----
FROM maven:3.9.6-eclipse-temurin-17 AS backend-build
WORKDIR /app/backend
COPY backend/ .
RUN mvn clean package -DskipTests

# ---- Stage 3: Run the combined app ----
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=backend-build /app/backend/target/*.jar app.jar
COPY --from=frontend-build /app/frontend/dist/ /app/public/
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
